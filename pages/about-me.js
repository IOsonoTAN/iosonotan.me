import React from 'react'
import Main from '../layouts/main'

export default class AboutMe extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      title: 'About me'
    }
  }

  clickMe (message) {
    alert(message)
  }

  render () {
    return (
      <Main title={this.state.title}>
        <div className="container margin-top-20">
          <h1>About ME</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta enim eaque quos distinctio odio magni explicabo odit at? Ut magnam numquam optio architecto impedit neque error eos sunt illum tempore?</p>
          <p>ราชบัณฑิตยสถานอพาร์ทเมนต์ โฮปโปรเจ็กเตอร์ซ้อไพลิน สไปเดอร์วีเจพาร์ทเนอร์ ป๋าต้าอ่วยก่อนหน้าปูอัด รีเสิร์ชพรีเซ็นเตอร์เบญจมบพิตร แอ็กชั่น ไวอากร้า ตี๋สันทนาการ แคร์ตรวจทานเป็นไงเปเปอร์ ไคลแม็กซ์โค้กตุ๊กตุ๊กโชว์รูม อาข่ากราวนด์ ทริป อัลมอนด์เคลื่อนย้ายนินจาจีดีพีซูม โลโก้ไฮเปอร์แครอทไทยแลนด์ แอดมิสชันคันถธุระทำงานวาซาบิลิมิต สะกอมสไตรค์คอนโดบูติคโยเกิร์ต</p>
          <button className="btn btn-primary" onClick={e => this.clickMe('message')}>click me!</button>
        </div>
      </Main>
    )
  }
}
