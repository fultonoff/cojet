'use client'
import WhatsAppWidget from "react-whatsapp-chat-widget";
import "react-whatsapp-chat-widget/index.css";
import logo from '../images/logoFly1.png'

const Whatsapp = () => {
  return (
    <WhatsAppWidget
			phoneNo="+85257285364"
			position="right"
			iconSize="40"
			iconColor="white"
			iconBgColor="#AC906F"
			headerIcon={logo.src}
			headerIconColor="#AC906F"
			headerTxtColor="white"
			headerBgColor="#AC906F"
			headerTitle="COJET"
			headerCaption="Online"
			bodyBgColor="#bbb"
			chatPersonName="Support"
			chatMessage={<>Hi there 👋 <br /><br /> Where do you want to fly today?</>}
			footerBgColor="#AC906F"
			btnBgColor="white"
			btnTxtColor="#AC906F"
		/>
  )
}

export default Whatsapp
