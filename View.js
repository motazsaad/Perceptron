class View {

  constructor() {

    this.m_Position = {x: 0, y: 0};

    let thisObject = this;
    d3.select('body').on('mousemove', function() {
      thisObject.m_Position = {
        x: d3.mouse(this)[0],
        y: d3.mouse(this)[1]
      };
      if (typeof thisObject.__mousemoved === 'function') {
        thisObject.__mousemoved(thisObject.getMousePosition());
      }
    });

  }

  // virtual
  __mousemoved() {}

  getMousePosition() {
    return this.m_Position;
  }

}
