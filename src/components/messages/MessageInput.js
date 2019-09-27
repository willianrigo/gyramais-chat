import React from 'react'

import { Input, Button, Row, Col, Layout } from 'antd'
const { TextArea } = Input
const { Content } = Layout


//Component used to write and send messages
class MessageInput extends React.Component {
    state = {
      value: '',
    };
  
    onChange = ({ target: { value } }) => {
      this.setState({ value });
    };
  
    render() {
      const { value } = this.state;
  
      return (
          <div>
        <Content style={{padding: '30px 0 30px 30px',
        backgroundColor: '#001529',
        // position: 'absolute',
        bottom: 0,
        // width: '100%'
        }}>
          <Row>
          <Col span={20}>
            <TextArea
              value={value}
              onChange={this.onChange}
              placeholder="Controlled autosize"
              autosize={{ minRows: 1, maxRows: 5 }}
            />
          </Col>
          <Col span={4}>
              <div style={{marginLeft: 10}}>
                  <Button type="primary"  icon="right-square" size={50} />
              </div>
          </Col>

          </Row>
        </Content>
        </div>
      );
    }
  }

export { MessageInput }