import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBan, faCartPlus, faFloppyDisk, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Alert, Button, Card, Col, Container, Form, Row, Table } from 'react-bootstrap';
import { EquipmentRequest, EquipmentRequestItems } from './type/EquipmentType';
import './App.scss';

function App() {
  const initialRequestItems: EquipmentRequestItems[] = [
    {
      RequestItemID: '',
      RequestID: '',
      EquipmentName: '',
      UnitOfMeasure: '',
      Quantity: '1',
      EstimatedPrice: '0',
      CurrentStatus: '',
      ItemNotes: '',
    },
  ];

  const [equipmentData, setEquipmentData] = useState<EquipmentRequest>({
    RequestID: '',
    RequestNumber: '',
    DepartmentCode: '',
    DepartmentName: '',
    HRRequestReceivedDate: '',
    DeliveryDate: '',
    WarehouseEntryDate: '',
    UnitApprovalDate: '',
    RequestStatus: '',
    RequestType: '',
    Notes: '',
    RequestItems: initialRequestItems,
  });

  const equipmentNameSuggestions = ['Laptop', 'Monitor', 'Keyboard', 'Mouse', 'Printer', 'Scanner', 'Projector', 'Table', 'Chair', 'Cabinet', 'Air Conditioner', 'Refrigerator', 'Water Dispenser', 'Coffee Machine', 'Microwave Oven', 'Water Heater', 'Fan', 'Light', 'Telephone', 'Mobile Phone', 'Tablet', 'Camera', 'Speaker', 'Microphone', 'Headphone', 'Television', 'Radio', 'Clock', 'Calendar', 'Whiteboard', 'Blackboard', 'Noticeboard', 'Flipchart', 'Podium', 'Stand', 'Shelf', 'Rack', 'Curtain', 'Blind', 'Carpet', 'Mat', 'Trash Can', 'Recycle Bin', 'Fire Extinguisher', 'First Aid Kit', 'Safety Sign', 'Fire Alarm', 'Smoke Detector', 'CCTV Camera', 'Access Control', 'Intercom', 'PABX', 'UPS', 'Generator', 'Water Pump', 'Water Tank', 'Water Filter', 'Water Heater', 'Water Cooler', 'Water Dispenser', 'Water Purifier', 'Water Softener', 'Water Meter', 'Water Valve', 'Water Pipe', 'Water Hose', 'Water Tap', 'Water Sprinkler', 'Water Sprayer', 'Water Gun', 'Water Bucket', 'Water Jug', 'Water Bottle', 'Water Glass', 'Water Cup', 'Water Plate', 'Water Bowl', 'Water Tray', 'Water Jug', 'Water Pitcher', 'Water Dispenser', 'Water Cooler', 'Water Purifier', 'Water Softener', 'Water Heater', 'Water Filter', 'Water Tank', 'Water Pump', 'Water Meter', 'Water Valve', 'Water Pipe', 'Water Hose', 'Water Tap', 'Water Sprinkler', 'Water Sprayer', 'Water Gun', 'Water Bucket', 'Water Jug', 'Water Bottle', 'Water Glass', 'Water Cup'];
  const unitOfMeasureSuggestions = ['Each', 'Box', 'Set', 'Meter', 'Kilogram', 'Liter', 'Gallon', 'Dozen', 'Pair'];
  const requestStatusSuggestions = ['Draft', 'Submitted', 'Approved', 'Rejected', 'Cancelled', 'Completed'];
  const handleAddItem = () => {
    setEquipmentData({
      ...equipmentData,
      RequestItems: [
        ...(equipmentData.RequestItems || []),
        {
          RequestItemID: '',
          RequestID: '',
          EquipmentName: '',
          UnitOfMeasure: '',
          Quantity: '1',
          EstimatedPrice: '0',
          CurrentStatus: '',
          ItemNotes: '',
        },
      ],
    });
  };

  const handleRemoveItem = (index: number) => {
    const newItems = (equipmentData.RequestItems || []).filter((_, i) => i !== index);
    setEquipmentData({ ...equipmentData, RequestItems: newItems });
  };

  const handleItemChange = (index: number, field: keyof EquipmentRequestItems, value: string) => {
    const newItems = (equipmentData.RequestItems || []).map((item, i) =>
      i === index ? { ...item, [field]: value } : item
    );
    setEquipmentData({ ...equipmentData, RequestItems: newItems });
  };

  const handleResetForm = () => {
    setEquipmentData({
      RequestID: '',
      RequestNumber: '',
      DepartmentCode: '',
      DepartmentName: '',
      HRRequestReceivedDate: '',
      DeliveryDate: '',
      WarehouseEntryDate: '',
      UnitApprovalDate: '',
      RequestStatus: '',
      RequestType: '',
      Notes: '',
      RequestItems: initialRequestItems,
    });
  }

  return (
    <Container >

      <Alert key="warning" variant='warning'>
        <h2>Equipment Request</h2>
      </Alert>
      <hr />
      <Card border="primary">
        <Card.Header><b>Equipment Request Form</b> </Card.Header>
        <Card.Body>
          <Form>
            <Form.Group as={Row} >
              <Col md={4}>
                <Form.Label><b>Department Name</b></Form.Label>
                <Form.Select
                  aria-label="Department Code"
                  value={equipmentData.DepartmentCode}
                  onChange={(e) => setEquipmentData({ ...equipmentData, DepartmentCode: e.target.value, DepartmentName: e.target.options[e.target.selectedIndex].text })}
                >
                  <option value="">Select Department</option>
                  <option value="HR">HR</option>
                  <option value="IT">IT</option>
                  <option value="Finance">Finance</option>
                </Form.Select>


              </Col>
              <Col md={4}>
                <Form.Label><b>Request Type</b></Form.Label>
                <Form.Select
                  aria-label="Request Type"
                  value={equipmentData.RequestType}
                  onChange={(e) => setEquipmentData({ ...equipmentData, RequestType: e.target.value })}
                >

                  <option value="">Select Request Type</option>
                  <option value="Purchase">Purchase</option>
                  <option value="Repair">Repair</option>
                  <option value="Reserve">Reserve</option>
                </Form.Select>
              </Col>
            </Form.Group>


            <hr />
            <Form.Group as={Row} >
              <Col >
                <Form.Label> <b>Notes</b></Form.Label>
                <Form.Control
                  aria-label="Notes"
                  placeholder="Notes"
                  value={equipmentData.Notes}
                  onChange={(e) => setEquipmentData({ ...equipmentData, Notes: e.target.value })}
                />
              </Col>
            </Form.Group>
            <hr />
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Name</th>
                  <th> Quantity</th>
                  <th> Unit</th>
                  <th> Estimated Price</th>
                  <th> Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {(equipmentData.RequestItems || []).map((item, index) => (
                  <tr key={index}>
                    <td>
                      <Form.Control
                        aria-label="Name"
                        placeholder="Name"
                        value={item.EquipmentName}
                        onChange={(e) => handleItemChange(index, 'EquipmentName', e.target.value)}
                        list={`equipment-name-suggestions-${index}`}
                      />
                      <datalist id={`equipment-name-suggestions-${index}`}>
                        {equipmentNameSuggestions.map((name, i) => (
                          <option key={i} value={name} />
                        ))}
                      </datalist>
                    </td>
                    <td>
                      <Form.Control
                        type='number'
                        aria-label=" Quantity"
                        placeholder=" Quantity"
                        value={item.Quantity}
                        onChange={(e) => handleItemChange(index, 'Quantity', e.target.value)}
                      />
                    </td>
                    <td>
                      <Form.Control

                        aria-label=" Unit"
                        placeholder=" Unit"
                        value={item.UnitOfMeasure}
                        onChange={(e) => handleItemChange(index, 'UnitOfMeasure', e.target.value)}
                        list={`unit-of-measure-suggestions-${index}`}
                      />
                      <datalist id={`unit-of-measure-suggestions-${index}`}>
                        {unitOfMeasureSuggestions.map((unit, i) => (
                          <option key={i} value={unit} />
                        ))}
                      </datalist>
                    </td>
                    <td>
                      <Form.Control
                        aria-label=" Estimated Price"
                        placeholder=" Estimated Price"
                        value={item.EstimatedPrice}
                        type='number'
                        onChange={(e) => handleItemChange(index, 'EstimatedPrice', e.target.value)}
                      />
                    </td>
                    <td>
                      <Form.Control
                        aria-label=" Status"
                        placeholder=" Status"
                        value={item.CurrentStatus}
                        onChange={(e) => handleItemChange(index, 'CurrentStatus', e.target.value)}
                        list={`request-status-suggestions-${index}`}
                      />
                      <datalist id={`request-status-suggestions-${index}`}>
                        {requestStatusSuggestions.map((status, i) => (
                          <option key={i} value={status} />
                        ))}
                      </datalist>
                    </td>
                    <td>
                      <Button variant="danger" onClick={() => handleRemoveItem(index)}>
                        <FontAwesomeIcon icon={faTrash} />
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
            <hr />
            <Row >
              <Col >    <Button variant="primary" onClick={handleAddItem}>
                <FontAwesomeIcon icon={faCartPlus} /> {' '}
                Add Item
              </Button> {' '}     <Button variant="success" onClick={() => console.log(equipmentData)}>
                  <FontAwesomeIcon icon={faFloppyDisk} /> {' '}
                  Save
                </Button> {' '} <Button variant="warning" onClick={() => handleResetForm()}>
                  <FontAwesomeIcon icon={faBan} />{' '}
                  Cancel
                </Button></Col>
              <Col > </Col>
              <Col md={3}></Col>
              <Col md={3}></Col>
            </Row>

          </Form>
        </Card.Body>
      </Card>
      <hr />
    </Container>
  );
}

export default App;
