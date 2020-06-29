
const resultItemStyle = (classification) => {
        let color;
        switch (classification) {
            case '1':
                color = '#d3f2f3';
                break;
            case '2':
                color = '#d3f2f3';
                break;
            case '3':
                color = '#d3f2f3';
                break;
            case '4':
                color = '#e5daf6';
                break;
            case '5':
                color = '#e5daf6';
                break;
            case '6':
                color = '#efdffc';
                break;
            default:
                color = '#f5f5f5';
        }

    return {
        background: color,
    }
};

export default resultItemStyle;
