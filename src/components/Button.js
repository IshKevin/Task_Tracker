import PropTypes from 'prop-types'


const Button = ({color ,text, onClick}) => {
    const onclick = () => {
     console.log('clicked');
    }
  return (
    <button  
    className='btn'
    onClick= {onclick} 
    style={{ 
        backgroundColor: color
     }}> {text}
     </button>
  )
}
Button.defaultProps = {
    color: 'steelblue',
  }

  Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func
  }
  

export default Button
