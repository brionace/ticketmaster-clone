import "@testing-library/jest-dom"
import { configure, shallow } from "enzyme"
import Adapter from "@wojtekmaj/enzyme-adapter-react-17"
import Home from '../pages/index'

configure({ adapter: new Adapter() })

describe("Index/Home page", () => {
    it("renders index component without crashing", () => {
        shallow(<Home />)
    })
})