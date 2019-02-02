'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Indecision = function (_React$Component) {
    _inherits(Indecision, _React$Component);

    function Indecision(props) {
        _classCallCheck(this, Indecision);

        var _this = _possibleConstructorReturn(this, (Indecision.__proto__ || Object.getPrototypeOf(Indecision)).call(this, props));

        _this.state = {
            options: []
        };
        _this.removeAll = _this.removeAll.bind(_this);
        _this.decision = _this.decision.bind(_this);
        _this.addOption = _this.addOption.bind(_this);
        _this.removeOption = _this.removeOption.bind(_this);
        return _this;
    }

    _createClass(Indecision, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            try {
                var json = localStorage.getItem('options');
                if (json) {
                    this.setState(function () {
                        return {
                            options: JSON.parse(json)
                        };
                    });
                }
            } catch (e) {
                console.log('Can\'t retrieve data', e);
            }
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps, prevState) {
            if (prevState.options.length !== this.state.options.length) {
                var json = JSON.stringify(this.state.options);
                localStorage.setItem('options', json);
            }
        }
    }, {
        key: 'addOption',
        value: function addOption(option) {
            if (!option) {
                return 'Enter valid item';
            } else if (this.state.options.indexOf(option) > -1) {
                return 'Enter unique item';
            }
            this.setState(function (prevState) {
                return { options: prevState.options.concat([option]) };
            });
        }
    }, {
        key: 'removeAll',
        value: function removeAll() {
            // this.setState(() => {
            //     return {
            //         options: []
            //     }
            // });

            //simplified version of above - es6 way
            this.setState(function () {
                return { options: [] };
            });
        }
    }, {
        key: 'removeOption',
        value: function removeOption(optionToRemove) {
            this.setState(function (prevState) {
                return {
                    options: prevState.options.filter(function (option) {
                        return optionToRemove !== option;
                    })
                };
            });
        }
    }, {
        key: 'decision',
        value: function decision() {
            alert(this.state.options[Math.floor(Math.random() * this.state.options.length)]);
        }
    }, {
        key: 'render',
        value: function render() {
            var title = 'Indecision App';
            var subtitle = 'Put your life in the hands of a computer';

            return React.createElement(
                'div',
                null,
                React.createElement(Header, { title: title, subtitle: subtitle }),
                React.createElement(Action, {
                    hasOptions: this.state.options.length > 0,
                    decision: this.decision
                }),
                React.createElement(Options, {
                    options: this.state.options,
                    removeAll: this.removeAll,
                    removeOption: this.removeOption
                }),
                React.createElement(AddOption, { addOption: this.addOption })
            );
        }
    }]);

    return Indecision;
}(React.Component);

var Header = function Header(props) {
    return React.createElement(
        'header',
        null,
        React.createElement(
            'h1',
            null,
            props.title
        ),
        React.createElement(
            'h2',
            null,
            props.subtitle
        )
    );
};

var Action = function Action(props) {
    return React.createElement(
        'button',
        {
            onClick: props.decision,
            disabled: !props.hasOptions },
        'What should I do?'
    );
};

var Options = function Options(props) {
    return React.createElement(
        'section',
        null,
        props.options.length === 0 && React.createElement(
            'p',
            null,
            'Please add options to start.'
        ),
        React.createElement(
            'button',
            { onClick: props.removeAll },
            'Remove All'
        ),
        React.createElement(
            'ol',
            null,
            props.options.map(function (option, index) {
                return React.createElement(Option, {
                    key: index,
                    optionText: option,
                    removeOption: props.removeOption
                });
            })
        )
    );
};

var Option = function Option(props) {
    return React.createElement(
        'li',
        null,
        props.optionText,
        React.createElement(
            'button',
            {
                onClick: function onClick() {
                    return props.removeOption(props.optionText);
                }
            },
            'Remove'
        )
    );
};

var AddOption = function (_React$Component2) {
    _inherits(AddOption, _React$Component2);

    function AddOption(props) {
        _classCallCheck(this, AddOption);

        var _this2 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

        _this2.addOption = _this2.addOption.bind(_this2);
        _this2.state = {
            error: undefined
        };
        return _this2;
    }

    _createClass(AddOption, [{
        key: 'addOption',
        value: function addOption(e) {
            e.preventDefault();
            var option = e.target.elements.optionInput.value.trim();
            var error = this.props.addOption(option);
            e.target.elements.optionInput.value = '';

            this.setState(function () {
                return { error: error };
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                this.state.error && React.createElement(
                    'p',
                    null,
                    this.state.error
                ),
                React.createElement(
                    'form',
                    { onSubmit: this.addOption },
                    React.createElement('input', { type: 'text', name: 'optionInput' }),
                    React.createElement(
                        'button',
                        null,
                        'Add Option'
                    )
                )
            );
        }
    }]);

    return AddOption;
}(React.Component);

ReactDOM.render(React.createElement(Indecision, null), document.getElementById('app'));
