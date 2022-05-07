import styled from 'styled-components'
import { ColorTypes, Color } from '../../types/color-types'
import { convertToRgb } from '../../utils/utils'

export const SwatchContainer = styled.div`
    margin: 1rem;
    padding: 30px;
    text-align: left;
    color: inherit;
    text-decoration: none;
    border: 1px solid #eaeaea;
    border-radius: 10px;
    transition: color 0.15s ease, border-color 0.15s ease;
    max-width: 300px;
    box-sizing: border-box;
    background: ${(props: Color) => {
        const { type } = props
        switch(type) {
            case ColorTypes.HSL:
                return `hsl(${props.hue}, ${props.saturation}%, ${props.lightness}%)`
            default: {
                const rgb = convertToRgb(props)
                return `rgb(${rgb.red}, ${rgb.green}, ${rgb.blue})`
            }
        }
    }};

    &:hover,
    &:focus,
    &:active {
        color: #0070f3;
        border: 1px #0070f3 solid;
    }

    h2 {
        margin: 0 0 1rem 0;
        font-size: 1.5rem;
    }

    p {
        margin: 0;
        font-size: 1.25rem;
        line-height: 1.5;
    }
`
