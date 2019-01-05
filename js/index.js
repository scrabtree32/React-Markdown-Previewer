var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;}var renderer = new marked.Renderer();
//add target =_blank to links
renderer.link = function (href, title, text) {
  return '<a href="' + href + '" target="_blank">' + text + '</a>';
};

marked.setOptions({
  breaks: true });var


App = function (_React$Component) {_inherits(App, _React$Component);
  function App(props) {_classCallCheck(this, App);var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this,
    props));
    _this.state = {
      inputValue: placeholder };

    _this.handleChange = _this.handleChange.bind(_this);return _this;
  }_createClass(App, [{ key: 'handleChange', value: function handleChange(
    e) {
      this.setState({
        inputValue: e.target.value });

    } }, { key: 'render', value: function render()
    {
      return (
        React.createElement('div', { id: 'root' },
          React.createElement(Editor, { input: this.state.inputValue, handleChange: this.handleChange }),
          React.createElement(Preview, { input: this.state.inputValue })));


    } }]);return App;}(React.Component);var


Editor = function (_React$Component2) {_inherits(Editor, _React$Component2);
  function Editor(props) {_classCallCheck(this, Editor);return _possibleConstructorReturn(this, (Editor.__proto__ || Object.getPrototypeOf(Editor)).call(this,
    props));
  }_createClass(Editor, [{ key: 'render', value: function render()
    {
      return (
        React.createElement('div', { id: 'part1' },
          React.createElement('h1', { id: 'title' }, React.createElement('i', { className: 'fas fa-fire fa-sm' }), 'Editor:'),
          React.createElement('textarea', { id: 'editor',
            value: this.props.input,
            onChange: this.props.handleChange,
            type: 'text' })));



    } }]);return Editor;}(React.Component);var


Preview = function (_React$Component3) {_inherits(Preview, _React$Component3);
  function Preview(props) {_classCallCheck(this, Preview);return _possibleConstructorReturn(this, (Preview.__proto__ || Object.getPrototypeOf(Preview)).call(this,
    props));
  }_createClass(Preview, [{ key: 'render', value: function render()
    {
      return (
        React.createElement('div', { id: 'part2' },
          React.createElement('h1', { id: 'title' }, React.createElement('i', { className: 'fas fa-fire fa-sm' }), 'Previewer:'),
          React.createElement('p', { id: 'preview', dangerouslySetInnerHTML: { __html: marked(this.props.input, { renderer: renderer }) } })));


    } }]);return Preview;}(React.Component);


var placeholder = '# Welcome to my React Markdown Previewer!\n\n## This is a sub-heading...\n### And here\'s some other cool stuff:\n  \nHeres some code, `<div></div>`, between 2 backticks.\n\n```\n// this is multi-line code:\n\nfunction anotherExample(firstLine, lastLine) {\n  if (firstLine == \'```\' && lastLine == \'```\') {\n    return multiLineCode;\n  }\n}\n```\n  \nYou can also make text **bold**... whoa!\nOr _italic_.\nOr... wait for it... **_both!_**\nAnd feel free to go crazy ~~crossing stuff out~~.\n\nThere\'s also [links](https://www.freecodecamp.com), and\n> Block Quotes!\n\nAnd if you want to get really crazy, even tables:\n\nWild Header | Crazy Header | Another Header?\n------------ | ------------- | ------------- \nYour content can | be here, and it | can be here....\nAnd here. | Okay. | I think we get it.\n\n- And of course there are lists.\n  - Some are bulleted.\n     - With different indentation levels.\n        - That look like this.\n\n\n1. And there are numbererd lists too.\n1. Use just 1s if you want! \n1. But the list goes on...\n- Even if you use dashes or asterisks.\n* And last but not least, let\'s not forget embedded images:\n\n![React Logo w/ Text](http://www.stickpng.com/assets/images/584830e8cef1014c0b5e4aa0.png)';














































ReactDOM.render(React.createElement(App, null), document.getElementById('app'));