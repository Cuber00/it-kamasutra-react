import state from "./redux/state"
import {addPost, setChangeTextarea} from "./redux/state"
import {renderWindowDom} from "./render"

renderWindowDom(state, addPost, setChangeTextarea)