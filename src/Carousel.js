import React from 'react';
import PropTypes from 'prop-types';
import { spring, StaggeredMotion, presets } from 'react-motion';

import styles from './Carousel.module.css';

const DefaultNext = ({ onClick, disabled }) => (
  <div
    onClick={onClick}
    className={[styles.control, disabled ? styles.disabled : ''].join(' ')}
  >
    &#10095;
  </div>
);
const DefaultPrevious = ({ onClick, disabled }) => (
  <div
    onClick={onClick}
    className={[styles.control, disabled ? styles.disabled : ''].join(' ')}
  >
    &#10094;
  </div>
);

/**
 * The Carousel component with progressively render items
 */
class Carousel extends React.Component {
  static propTypes = {
    /** An array of items */
    items: PropTypes.array,
    /** A function that return a React element for Carousel's item*/
    renderItem: PropTypes.func.isRequired,
    /** A function that return a key for given item*/
    getKey: PropTypes.func.isRequired,
    /** A function that return a React element for Carousel's Next control*/
    renderNext: PropTypes.func.isRequired,
    /** A function that return a React element for Carousel's Previous control*/
    renderPrevious: PropTypes.func.isRequired,
    /** A spring configuration for animation */
    preset: PropTypes.shape({
      stiffness: PropTypes.number,
      damping: PropTypes.number
    }).isRequired,
    /** Callback when carousel moves forward */
    onNext: PropTypes.func,
    /** Callback when carousel moves backward */
    onPrevious: PropTypes.func,
    /** A number of visible items */
    blocks: PropTypes.number,
    /** A className for container an item */
    itemContainerClassName: PropTypes.string,
    /** A className for container of items */
    containerClassName: PropTypes.string,
    /** A className for root container, which contains controls and items */
    rootClassName: PropTypes.string
  };
  static defaultProps = {
    renderNext: DefaultNext,
    renderPrevious: DefaultPrevious,
    blocks: 4,
    preset: presets.noWobble
  };
  state = {
    index: 0
  };

  render() {
    const { items, blocks, preset, getKey } = this.props;
    const { index } = this.state;

    return (
      <div className={[styles.container, this.props.rootClassName].join(' ')}>
        {this.props.renderPrevious({
          onClick: this.previousClickHandler,
          disabled: index === 0
        })}
        <StaggeredMotion
          defaultStyles={this.styles()}
          key={items.length}
          styles={prevInterpolatedStyles =>
            prevInterpolatedStyles.map((style, i) => ({
              ...style,
              x:
                i === 0
                  ? spring(-(index * 100), preset)
                  : spring(prevInterpolatedStyles[i - 1].x + 100, preset)
            }))
          }
        >
          {interpolatingStyles => (
            <div
              className={[styles.slider, this.props.containerClassName].join(
                ' '
              )}
            >
              {interpolatingStyles
                .slice(
                  // we avoid to load all items, only necessary
                  index - blocks < 0 ? 0 : index - blocks,
                  index + 2 * blocks > items.length
                    ? items.length
                    : index + 2 * blocks
                )
                .map(style => (
                  <div
                    className={[
                      styles.slide,
                      this.props.itemContainerClassName
                    ].join(' ')}
                    key={getKey(items[style.index])}
                    data-id={getKey(items[style.index])}
                    style={{
                      ...style,
                      width: `${100 / blocks}%`,
                      transform: `translateX(${style.x}%)`
                    }}
                  >
                    {this.props.renderItem(items[style.index])}
                  </div>
                ))}
            </div>
          )}
        </StaggeredMotion>

        {this.props.renderNext({
          onClick: this.nextClickHandler,
          disabled: index + blocks > items.length - 1
        })}
      </div>
    );
  }
  nextClickHandler = () => {
    const { blocks, onNext, items } = this.props;
    const nextIndex = this.state.index + blocks;
    this.setState(
      {
        index: this.isValidIndex(nextIndex + blocks)
          ? nextIndex
          : items.length - blocks
      },
      () => onNext && onNext(this.state.index)
    );
  };

  previousClickHandler = () => {
    const { onPrevious, blocks } = this.props;
    const previousIndex = this.state.index - blocks;
    this.setState(
      {
        index: this.isValidIndex(previousIndex) ? previousIndex : 0
      },
      () => onPrevious && onPrevious(this.state.index)
    );
  };
  isValidIndex = index => index >= 0 && index < this.props.items.length;

  styles = () => {
    const { getKey, items } = this.props;
    return items.map((item, index) => ({
      index: index,
      x: index * 100
    }));
  };
}

export default Carousel;
