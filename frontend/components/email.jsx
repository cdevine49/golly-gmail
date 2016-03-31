var React = require('react');
var PropTypes = React.PropTypes;

var Email = React.createClass({

  render: function() {
    return (
      <section className=''>
        <div className='email-sender-info'>
          <img className='email-avatar' alt='' src='' height='' width=''></img>
          <h5 className='email-sender-name'></h5>
          <h5 className='email-sender-username'></h5>
        </div>
        <p className='email-time-sent'></p>
        <p className='email-subject'></p>
        <p className='email-body'></p>
      </section>
    );
  }

});

module.exports = Email;
