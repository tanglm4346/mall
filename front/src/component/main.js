import React from "react";

import {Col,Modal,Form,Input,Icon,Button,Carousel} from  'antd'


import taobao1 from '../image/taobao1.jpg';
import taobao2 from '../image/taobao2.jpg';
import taobao3 from '../image/taobao3.jpg';
import taobao4 from '../image/taobao4.jpg';
import taobao5 from '../image/taobao5.jpg';

const FormItem = Form.Item;


class Main extends  React.Component{
    constructor(props){
        super(props);
        this.state={
            loginVisible:false,
            registerVisible:false
        }
    }
    loginModalChange=(loginVisible)=>{
        this.setState({
            loginVisible:loginVisible
        });
    }
    registerModalChange=(registerVisible)=>{
        this.setState({
            registerVisible:registerVisible
        });
    }


    render(){
        console.log("loginVisible",this.state.loginVisible);
        const { getFieldDecorator } = this.props.form;
        return(
            <div>
                <div className="header">
                    <Col span={20}/>
                    <Col span={4}>
                        [<a onClick={this.loginModalChange.bind(this,true)}>登录</a>/<a onClick={this.registerModalChange.bind(this,true)}>注册</a>]
                    </Col>
                </div>
                <div className="body">
                    <Col span={4}/>
                    <Col span={16} style={{textAlign:"center"}}>
                        <div>
                            <Form layout="inline" >
                                <FormItem>
                                    {getFieldDecorator('userName', {
                                        rules: [{ required: true, message: 'Please input your username!' }],
                                    })(
                                        <Input prefix={<Icon type="search" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="" />
                                    )}
                                </FormItem>
                                <Button  className="search-btn"
                                         type="primary"
                                         htmlType="submit">
                                    search
                                </Button>
                            </Form>
                        </div>
                        <div className="blank-row"></div>
                        <div>
                            <div style={{width:520,height:580}}>
                                <Carousel autoplay>
                                    <div><img src={taobao1}/></div>
                                    <div><img src={taobao2}/></div>
                                    <div><img src={taobao3}/></div>
                                    <div><img src={taobao4}/></div>
                                    <div><img src={taobao5}/></div>
                                </Carousel>
                            </div>
                        </div>
                    </Col>
                    <Col span={4}/>
                </div>
                <div className="footer">

                </div>
                <Modal visible={this.state.loginVisible} title="登录" cancelText="取消" onCancel={this.loginModalChange.bind(this,false)} okText="登录" width={300}>
                    <Form>
                        <FormItem>
                            {getFieldDecorator('username', {
                                rules: [{ required: true, message: 'Please input your username!' }],
                            })(
                                <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                            )}
                        </FormItem>
                        <FormItem>
                            {getFieldDecorator('password', {
                                rules: [{ required: true, message: '' }],
                            })(
                                <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                            )}
                        </FormItem>
                    </Form>
                </Modal>

                <Modal visible={this.state.registerVisible} title="注册" cancelText="取消" onCancel={this.registerModalChange.bind(this,false)} okText="登录" width={300}>
                    <Form>
                        <FormItem>
                            {getFieldDecorator('username', {
                                rules: [{ required: true, message: 'Please input your username!' }],
                            })(
                                <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                            )}
                        </FormItem>
                        <FormItem>
                            {getFieldDecorator('password', {
                                rules: [{ required: true, message: 'Please input your Password!' }],
                            })(
                                <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                            )}
                        </FormItem>
                        <FormItem>
                            {getFieldDecorator('password', {
                                rules: [{ required: true, message: 'Please input your Password!' }],
                            })(
                                <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                            )}
                        </FormItem>
                    </Form>
                </Modal>
            </div>
        );

    }
}

export default  Form.create()(Main);