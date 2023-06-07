// Write your code here
import {AiFillCheckCircle} from 'react-icons/ai'

import {RiErrorWarningFill} from 'react-icons/ri'

import {MdWarning, MdInfo} from 'react-icons/md'

import Notification from '../Notification'

import './index.css'

const AlertNotifications = () => (
  <div className="alert-notification-container">
    <h1 className="heading"> Alert Notifications </h1>
    <Notification>
      <AiFillCheckCircle className="success" />
      <div>
        <h1 className="alert-heading success"> Success </h1>
        <p className="alert-message">
          You can access all the files in the folder
        </p>
      </div>
    </Notification>
    <Notification>
      <RiErrorWarningFill className="error" />
      <div>
        <h1 className="alert-heading error"> Error </h1>
        <p className="alert-message">
          Sorry, you are not authorized to have access to delete the file
        </p>
      </div>
    </Notification>
    <Notification>
      <MdWarning className="warning" />
      <div>
        <h1 className="alert-heading warning"> Warning </h1>
        <p className="alert-message">
          Viewers of this file can see comments and suggestions
        </p>
      </div>
    </Notification>
    <Notification>
      <MdInfo className="info" />
      <div>
        <h1 className="alert-heading info"> Info </h1>
        <p className="alert-message">
          Anyone on the internet can view these files
        </p>
      </div>
    </Notification>
  </div>
)

export default AlertNotifications
