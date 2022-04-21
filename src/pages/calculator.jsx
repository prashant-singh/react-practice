import React, { Component } from 'react';

class Calculator extends Component {
	state = {
		amount: 1000,
		rate: 6,
		interestAmount: 0,
		maturityAmount: 0,
		years: 1
	}
	render() {
		return (
			<div className='container mt-5 justify-content-center'>
				<div className='badge bg-primary'>
					<h5>FD Calculator</h5>
				</div>
				<div className='row m-2'>
					<div className="col-sm-4">
						<div className="input-group mb-2">
							<div className="input-group-prepend">
								<div className="input-group-text">Amount</div>
							</div>
							<input type="number" value={this.state.amount} className="form-control" id="inlineFormInputGroup" min={1000} placeholder="Amount" onChange={evt => this.updateAmountValue(evt)} />
						</div>
					</div>
					<div className="col-sm-4">
						<div className="input-group mb-2">
							<div className="input-group-prepend">
								<div className="input-group-text">Years</div>
							</div>
							<input type="number" value={this.state.years} className="form-control" id="inlineFormInputGroup" min={1} placeholder="Years" onChange={evt => this.updateYearsValue(evt)} />
						</div>
					</div>
					<div className="col-sm-4">
						<div className="input-group mb-2">
							<div className="input-group-prepend">
								<div className="input-group-text">%</div>
							</div>
							<input type="number" value={this.state.rate} className="form-control" id="inlineFormInputGroup" min={1} placeholder="Rate" onChange={evt => this.updateRateValue(evt)} />
						</div>
					</div>
				</div>

				<div className='row m-2'>
					<div className='col-sm-6'>
						<button onClick={() => this.calculateInterestAmount()} className='btn btn-primary'>Calculate</button>
					</div>
				</div>
				<div className='row m-2'>
					<div className='col-sm-6'>
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

	updateYearsValue(val) {
		const updatedYears = val.target.value;
		this.setState({ years: updatedYears });
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
		var rate = parseFloat(this.state.rate / 100);
		var principal = parseInt(this.state.amount);
		var matAmount = principal + (principal * ((1 + rate) * this.state.years) - 1);
		const interestFactor = Math.pow(1 + (parseFloat(rate)), parseInt(this.state.years));
		const finalAmount = Math.round(parseInt(this.state.amount) * parseFloat(interestFactor));
		const interest = finalAmount - principal;
		console.log("matu:" + matAmount);
		console.log(interest + " " + this.state.amount + " years:" + this.state.years + " interestAmount:" + interestFactor);

		this.setState({ interestAmount: interest, maturityAmount: finalAmount });
	}
}

export default Calculator;