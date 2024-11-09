export default function UserInput({inputData, handleChange}) {
    return (
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label htmlFor="">Initial Investment</label>
                    <input type="number" required value={inputData.initialInvestment} onChange={(event) => {return handleChange("initialInvestment",event.target.value)}}/>
                </p>
                <p>
                    <label htmlFor="">Annual Investment</label>
                    <input type="number" required value={inputData.annualInvestment} onChange={(event) => {return handleChange("annualInvestment",event.target.value)}}/>
                </p>
            </div>
            <div className='input-group'>
                <p>
                    <label htmlFor="">Expected Return</label>
                    <input type="number" required value={inputData.expectedReturn} onChange={(event) => { return handleChange("expectedReturn", event.target.value) }} />
                </p>
                <p>
                    <label htmlFor="">Duration</label>
                    <input type="number" required value={inputData.duration} onChange={(event) => { return handleChange("duration", event.target.value) }} />
                </p>
            </div>
        </section>
    );
}