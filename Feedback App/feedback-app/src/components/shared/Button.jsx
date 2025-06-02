
import PropTypes from 'prop-types'

function Button({ children, variant = 'primary', type = 'button', isDisabled = false }) {
    console.log('Button props:', { variant, type, isDisabled });
    return (
        <button type={type} disabled={isDisabled} className={`btn btn-${variant} `}>
            {children}
        </ button>
    )
}



Button.propTypes = {
    children: PropTypes.node.isRequired,
    variant: PropTypes.string,
    type: PropTypes.string,
    isDisabled: PropTypes.bool,
}

export default Button