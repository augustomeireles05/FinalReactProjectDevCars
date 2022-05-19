// import mobiscroll from '@mobiscroll/react';
// import '@mobiscroll/react/dist/css/mobiscroll.min.css';

// mobiscroll.settings = {
//     lang: 'pt-BR',
//     theme: 'ios',
//     themeVariant: 'light',
//     display: 'bubble'
// };

// class App extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             val: new Date()
//         };
//     }
    
//     show = () => {
//         this.external.instance.show();
//     }
    
//     setExternal = (comp) => {
//         this.external = comp;
//     }
//     render () {
//         return (
//             <div>
//                 <mobiscroll.Form className="mbsc-form-box">
//                     <div className="mbsc-grid mbsc-form-grid">
//                         <mobiscroll.FormGroup>
//                             <mobiscroll.FormGroupTitle>Using the Calendar with Mobiscroll form fields</mobiscroll.FormGroupTitle>
//                             <div className="mbsc-row">
//                                 <div className="mbsc-col-sm-12 mbsc-col-md-6">
//                                     <mobiscroll.Calendar>
//                                     	<mobiscroll.Input inputStyle="box" placeholder="Please Select...">Date</mobiscroll.Input>
//                                     </mobiscroll.Calendar>
//                                 </div>
//                                 <div className="mbsc-col-sm-12 mbsc-col-md-6">
//                                     <mobiscroll.Calendar controls={['calendar', 'time']}>
//                                     	<mobiscroll.Input inputStyle="box" placeholder="Please Select...">Date & Time</mobiscroll.Input>
//                                     </mobiscroll.Calendar>
//                                 </div>
//                             </div>
//                         </mobiscroll.FormGroup>
//                     </div>
//                 </mobiscroll.Form>
//                 <div className="mbsc-grid">
//                     <div className="mbsc-row">
//                         <div className="mbsc-col-sm-12 mbsc-col-md-6">
//                             <label htmlFor="demo-non-form">Date</label>
//                             <mobiscroll.Calendar>
//                                 <input className="demo-non-form" placeholder="Please Select..." />
//                             </mobiscroll.Calendar>
//                         </div>
//                         <div className="mbsc-col-sm-12 mbsc-col-md-6">
//                             <div className="mbsc-row mbsc-align-items-end">
//                                 <div className="mbsc-col-9">
//                                     <label htmlFor="demo-external">Show on button click only</label>
//                                     <mobiscroll.Calendar
//                                         ref={this.setExternal}
//                                         value={this.state.val}
//                                         showOnTap={false}
//                                         showOnFocus={false}
//                                         controls={['calendar', 'time']}
//                                     >
//                                         <input id="demo-external" className="demo-non-form" />
//                                     </mobiscroll.Calendar>
//                                 </div>
//                                 <div className="mbsc-col-3 external-container">
//                                     <button onClick={this.show} className="external-button">Show</button>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         );
//     }    
// }
