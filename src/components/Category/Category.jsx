import PropTypes from "prop-types"

function Category ({name}){


    return (
        <>
        <button type="button" className="btn btn-primary m-2">{name} </button>

        </>
    )
}

export default Category

Category.propTypes = {
    name: PropTypes.string.isRequired,

}

