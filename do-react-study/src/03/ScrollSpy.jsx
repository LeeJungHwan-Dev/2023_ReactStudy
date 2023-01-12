import React from 'react';

export default class ScrollSpy extends React.PureComponent {
  constructor(props) {
    super(props);
    this.setRef = this.setRef.bind(this);
    this.checkPostion = this.checkPostion.bind(this);
  }

  setRef(ref) {
    this.ref = ref;
  }

  checkPostion() {
    if (this.ref.getBoundingClientRect().top < window.innerHeight) {
      console.log('enter');
    } else {
      console.log('exit');
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.checkPostion);
    this.checkPostion();
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.checkPostion);
  }

  render() {
    return <div ref={this.setRef} />;
  }
}
