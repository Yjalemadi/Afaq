import React from "react";
import { Button, DatePicker, Row, Col, Select, Tag } from "antd";

class ArchivePopup extends React.Component {
  render() {
    const options = [
      { label: "IT", value: "rgba(255,10,0,0.25)" },
      { label: "HR", value: "rgba(255,191,0,0.25)" },
      { label: "COM (Delegated)", value: "rgba(127,0,255,0.25)" },
    ];

    function tagRender(props) {
      const { label, value, closable, onClose } = props;

      return (
        <Tag
          color={value}
          closable={closable}
          onClose={onClose}
          style={{ marginRight: 3 }}
        >
          {label}
        </Tag>
      );
    }

    return (
      <div className="popup">
        <div className="popup_inner">
          <h6>Stream</h6>
          <Select
            mode="multiple"
            tagRender={tagRender}
            style={{ marginTop: 10, marginBottom: 15, width: "100%" }}
            allowClear
            options={options}
          />
          <h6 style={{ marginBottom: 15 }}>End Date</h6>
          <Row gutter={[8, 8]}>
            <Col span={5}>From</Col>
            <Col span={19}>
              <DatePicker style={{ width: "100%" }} />
            </Col>
          </Row>
          <Row>
            <Col span={5}> To </Col>
            <Col span={19}>
              <DatePicker style={{ width: "100%" }} />
            </Col>
          </Row>
          <Button className="cancel" onClick={this.props.closePopup}>
            Cancel
          </Button>
          <Button
            type="primary"
            className="apply"
            onClick={this.props.applyFilter}
          >
            Apply Filter
          </Button>
        </div>
      </div>
    );
  }
}

export default ArchivePopup;
