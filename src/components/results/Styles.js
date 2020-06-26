
const resultItemStyle = (classification) => {
    return {
        background: '#f4f4f4',
        padding: '10px',
        borderBottom: '1px #ccc dotted',
        textAlign: 'center',
        color: classification === '99' ? '#f5801f':'#000',
        display: 'flex'
    }
};

export default resultItemStyle;
