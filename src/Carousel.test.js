import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow, mount } from 'enzyme';
import Carousel from './Carousel';
const data = [
  'https://picsum.photos/800/500/?image=1063',
  'https://picsum.photos/800/500/?image=1060',
  'https://picsum.photos/800/500/?image=1064',
  'https://picsum.photos/800/500/?image=1051',
  'https://picsum.photos/800/500/?image=1050',
  'https://picsum.photos/800/500/?image=1049',
  'https://picsum.photos/800/500/?image=1047',
  'https://picsum.photos/800/500/?image=1036',
  'https://picsum.photos/800/500/?image=1045',
  'https://picsum.photos/800/500/?image=1044',
  'https://picsum.photos/800/500/?image=1043',
  'https://picsum.photos/800/500/?image=1042',
  'https://picsum.photos/800/500/?image=1041',
  'https://picsum.photos/800/500/?image=1040'
];
configure({ adapter: new Adapter() });
describe('<Carousel>', () => {
  it('render', () => {
    const wrapper = shallow(
      <Carousel
        items={data}
        renderItem={item => <div />}
        getKey={(o, i) => i}
      />
    );
    expect(wrapper).toBeDefined();
  });
  it('disable previous button at the begin', () => {
    const wrapper = shallow(
      <Carousel
        items={data}
        renderItem={item => <div />}
        getKey={(o, i) => i}
        renderPrevious={({ onClick, disabled }) => (
          <button className="previous" disabled={disabled} />
        )}
      />
    );
    const cheerio = wrapper.render();
    expect(cheerio.find('.previous').attr('disabled')).toBeTruthy();
  });
  it('enable previous button at the middle', done => {
    const wrapper = shallow(
      <Carousel
        items={data}
        renderItem={item => <div />}
        getKey={(o, i) => i}
        renderPrevious={({ onClick, disabled }) => (
          <button className="previous" disabled={disabled} />
        )}
      />
    );
    wrapper.setState({ index: 2 }, () => {
      expect(
        wrapper
          .render()
          .find('.previous')
          .attr('disabled')
      ).toBeFalsy();
      done();
    });
  });

  it('disable next button at the end', done => {
    const wrapper = shallow(
      <Carousel
        items={data}
        renderItem={item => <div />}
        getKey={(o, i) => i}
        renderNext={({ onClick, disabled }) => (
          <button className="next" disabled={disabled} />
        )}
      />
    );
    wrapper.setState({ index: data.length - 1 }, () => {
      expect(
        wrapper
          .render()
          .find('.next')
          .attr('disabled')
      ).toBeTruthy();
      done();
    });
  });
  it('enable next button at the middle', done => {
    const wrapper = shallow(
      <Carousel
        items={data}
        renderItem={item => <div />}
        getKey={(o, i) => i}
        renderNext={({ onClick, disabled }) => (
          <button className="next" disabled={disabled} />
        )}
      />
    );
    wrapper.setState({ index: 2 }, () => {
      expect(
        wrapper
          .render()
          .find('.next')
          .attr('disabled')
      ).toBeFalsy();
      done();
    });
  });
});
