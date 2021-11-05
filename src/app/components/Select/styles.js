export const SELECT_STYLES = {
  menu: provided => ({
    ...provided,
    width: '100%'
  }),
  menuList: provided => ({
    ...provided,
    borderRadius: '4px',
    paddingTop: 0,
    paddingBottom: 0
  }),
  indicatorSeparator: () => ({}),
  container: props => ({ ...props, width: '100%' }),
  control: props => ({
    ...props,
    background: '#FFF',
    border: '2px solid #D9E2F4',
    borderRadius: '10px',
    boxSizing: 'border-box',
    height: '46px',
    ':hover': {
      border: '2px solid #051B5F'
    },
    ':focus': {
      border: '2px solid #051B5F'
    },
    width: '100%'
  }),
  dropdownIndicator: (provided, state) => ({
    ...provided,
    transition: 'all .2s ease',
    transform: state.selectProps.menuIsOpen ? 'rotate(180deg)' : null,
    color: '#051B5F',
    ':hover': {
      color: '#051B5F'
    }
  }),
  valueContainer: () => ({ height: '40px', padding: '0' }),
  option: props => ({ ...props, padding: '0px' }),
  placeholder: props => ({
    ...props,
    top: '',
    marginTop: '20px',
    marginLeft: '15px',
    color: '#484848',
    fontSize: '14px',
    fontWeight: 400,
    lineHeight: '21px'
  })
};

export const ERROR_STYLES = {
  control: props => ({
    ...props,
    background: '#FFF',
    border: '2px solid #DD2122',
    borderRadius: '10px',
    boxSizing: 'border-box',
    height: '46px',
    ':hover': {
      border: '2px solid #051B5F'
    },
    ':focus': {
      border: '2px solid #051B5F'
    },
    width: '100%'
  }),
  dropdownIndicator: (provided, state) => ({
    ...provided,
    transition: 'all .2s ease',
    transform: state.selectProps.menuIsOpen ? 'rotate(180deg)' : null,
    color: '#DD2122',
    ':hover': {
      color: '#051B5F'
    }
  })
};

export const FOCUS_STYLES = {
  control: props => ({
    ...props,
    background: '#FFF',
    border: '2px solid #733FE7',
    borderRadius: '10px',
    boxSizing: 'border-box',
    height: '46px',
    ':hover': {
      border: '2px solid #051B5F'
    },
    ':focus': {
      border: '2px solid #051B5F'
    },
    width: '100%'
  }),
  dropdownIndicator: (provided, state) => ({
    ...provided,
    transition: 'all .2s ease',
    transform: state.selectProps.menuIsOpen ? 'rotate(180deg)' : null,
    color: '#733FE7',
    ':hover': {
      color: '#051B5F'
    }
  })
};

export const THEME = theme => ({
  ...theme,
  colors: {
    ...theme.colors,
    primary: 'rgba(127, 70, 234, 0.35)',
    primary75: 'rgba(127, 70, 234, 0.35)'
  }
});
