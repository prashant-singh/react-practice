import React, { Component } from 'react';

class Calculator extends Component {
	state = {
		amount: 0,
		rate: 6,
		interestAmount: 0,
		maturityAmount: 0
	}
	render() {
		return (
			<div className='container mt-5 justify-content-center'>
				FD Calculator
				<div className='row m-2'>
					<div className="form-outline col-6">
						<input type="number" id="typeNumber" className="form-control" placeholder="Amount" onChange={evt => this.updateAmountValue(evt)} />
					</div>
					<div className="col-6">
						<div className="input-group mb-2">
							<div className="input-group-prepend">
								<div className="input-group-text">%</div>
							</div>
							<input type="number" className="form-control" id="inlineFormInputGroup" placeholder="Rate" onChange={evt => this.updateRateValue(evt)} />
						</div>
					</div>
				</div>




				<div className='row m-2'>
					<div className='col-6'>
						<button onClick={() => this.calculateInterestAmount()} className='btn btn-primary'>Calculate</button>
					</div>
				</div>
				<div className='row m-2'>
					<div className='col-6'>
						<div className="alert alert-primary">
							Interest: {this.state.interestAmount}
							<br></br>
							Maturity Amount: {this.state.maturityAmount}
						</div>
					</div>
				</div>
			</div >
		);
	}

	updateRateValue(val) {
		const updatedVal = val.target.value;
		this.setState({ rate: updatedVal });
	}

	updateAmountValue(val) {
		const updatedVal = val.target.value;
		this.setState({ amount: updatedVal });
	}

	calculateInterestAmount() {
		const interestVal = Math.round(this.state.amount * (this.state.rate / 100));
		const finalAmount = parseInt(this.state.amount) + parseInt(interestVal);
		this.setState({ interestAmount: interestVal, maturityAmount: finalAmount });
	}
}

export default Calculator;