import { FormControl, InputGroup, Dropdown, DropdownButton} from "react-bootstrap"

const Search = () => {
    return(
        <>
            <InputGroup className="mb-3">
                <FormControl placeholder="Search"/>
                <DropdownButton
                    variant="info"
                    title="Dropdown">
                    <Dropdown.Item href="#">Action</Dropdown.Item>
                    <Dropdown.Item href="#">Another action</Dropdown.Item>
                    <Dropdown.Item href="#">Something else here</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item href="#">Separated link</Dropdown.Item>
                </DropdownButton>
            </InputGroup>
        </>
    )
}

export default Search;