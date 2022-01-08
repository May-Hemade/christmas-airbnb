import { Search } from "react-bootstrap-icons"
import { propTypes } from "react-bootstrap/esm/Image"
import "./SearchButton.css"

const SearchButton = (props) => {
  return (
    <div className="d-flex search-btn-container">
      <div className="m-3">
        <div className="search-btn-title"> {props.title}</div>
        <div className="search-btn-label"> {props.label}</div>
      </div>
      {props.showIcon && (
        <div className="search-btn-icon ml-4 d-flex align-items-center justify-content-center m-3">
          <Search></Search>
        </div>
      )}
    </div>
  )
}

export default SearchButton
