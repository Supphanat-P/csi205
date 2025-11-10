const Value = ({ name, type, value, setValue }) => {

    // useEffect(() => {
    //     setValue(intitial || 0)
    // }, [intitial])

    return (
        <div>
            <div className="border-2 border border-black rounded-3 p-3 m-auto bg-black bg-opacity-10" style={{ width: 'fit-content' }}>
                <div className="text-center text-navy fs-3 fw-bold">{name || 'VALUE'}</div>

                <div className='d-flex mt-3 justify-content-around'>
                    <button className='btn btn-danger' style={{ width: 'fit-content' }} onClick={() => setValue(value - 1)} >&minus;</button>
                    <div className="font-monospace fw-bold fs-4 m-4 mt-0 mb-0">{type == 'real' ? value.toFixed(2) : value}</div>
                    <button className='btn btn-success' style={{ width: 'fit-content' }} onClick={() => setValue(value + 1)} >+</button>
                </div>
            </div>
        </div>
    )
};

export default Value