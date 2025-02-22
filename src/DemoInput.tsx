import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useRef, useEffect } from 'react';
import { Button, Form, InputGroup, Row } from 'react-bootstrap';
const DemoInputFields = () => {
    const [inputField, setInputField] = useState([{ value: '' }]);
    const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

    const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            setInputField([...inputField, { value: '' }]);
        }
    };

    useEffect(() => {
        if (inputRefs.current.length > 0) {
            inputRefs.current[inputRefs.current.length - 1]?.focus();
        }
    }, [inputField]);
    return (<> <Form>
        {inputField.map((input, index) => (
            <InputGroup className="mb-3" key={index}>
                <Form.Control
                    aria-label="Example text with button addon"
                    aria-describedby="basic-addon1"
                    placeholder="Add new item"
                    value={input.value}
                    onChange={e => {
                        const values = [...inputField];
                        values[index].value = e.target.value;
                        setInputField(values);
                    }}
                    onKeyPress={handleKeyPress}
                    ref={(el) => { inputRefs.current[index] = el; }}
                />
                <Button variant="outline-danger" id="button-addon1" onClick={() => {
                    const values = [...inputField];
                    values.splice(index, 1);
                    setInputField(values);
                    inputRefs.current.splice(index, 1);
                }} >
                    Delete
                </Button>
            </InputGroup>
        ))}

        <hr />
        <Button variant="outline-primary" onClick={() => setInputField([...inputField, { value: '' }])}>
            Add new item
        </Button>
        <hr />
        <Row>
            <Button variant="success" onClick={() => {
                const values = inputField.map(input => input.value);
                if (values.length === 0) {
                    alert('Please add some items');
                    return;
                }
                if (values.some(value => value === '')) {
                    alert('Please fill all the items');
                    return;
                }
                console.log(values);
            }}
            >
                Save
            </Button>
        </Row>
    </Form></>);
}

export default DemoInputFields;