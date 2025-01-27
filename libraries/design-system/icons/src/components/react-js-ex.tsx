import * as React from 'react'
import type { IconProps } from '../types'
const ReactJsEx = React.forwardRef<SVGSVGElement, IconProps>(({ color = 'currentColor', ...props }, ref) => {
    return (
        <svg xmlns='http://www.w3.org/2000/svg' width={15} height={15} fill='none' ref={ref} {...props}>
            <path
                fill={color}
                fillRule='evenodd'
                d='M11.25.75h-7.5a3 3 0 0 0-3 3v7.5a3 3 0 0 0 3 3h7.5a3 3 0 0 0 3-3v-7.5a3 3 0 0 0-3-3M7.5 8.406a.906.906 0 1 0 0-1.812.906.906 0 0 0 0 1.812M6.05 6.648q.246-.425.506-.81a14 14 0 0 1 1.908 0 14 14 0 0 1 .955 1.653 14 14 0 0 1-.955 1.653 14 14 0 0 1-1.908 0A14 14 0 0 1 5.6 7.49q.204-.418.449-.843m-.65-.375q.097-.168.197-.33-.305.045-.588.104.09.274.203.562.092-.168.188-.336m2.11-1.218q-.195 0-.385.005.192-.24.385-.457.192.216.385.457a15 15 0 0 0-.385-.005M6.14 5.12c.275-.385.56-.74.845-1.057a7 7 0 0 0-.359-.315c-.385-.313-.734-.515-1.025-.609s-.481-.069-.603.002c-.123.07-.24.223-.304.522s-.064.702.015 1.192q.036.226.093.469c.418-.09.867-.158 1.338-.204m2.738 0c-.275-.385-.56-.74-.846-1.057q.183-.172.36-.315c.385-.313.734-.515 1.024-.609s.482-.069.604.002c.123.07.24.223.304.522s.064.702-.015 1.192q-.036.226-.093.469c-.418-.09-.867-.158-1.338-.204m2.172-.147a7 7 0 0 1-.107.535q.27.082.517.175c.513.196.954.439 1.274.727.32.289.548.653.548 1.081s-.229.792-.548 1.08-.76.532-1.274.728q-.246.093-.517.175.065.275.107.534c.087.543.097 1.047.007 1.468-.09.42-.291.8-.662 1.014-.37.214-.8.199-1.21.066-.409-.132-.84-.393-1.266-.74a7 7 0 0 1-.41-.36q-.206.195-.41.36c-.426.347-.857.608-1.267.74-.41.133-.84.148-1.21-.066s-.571-.594-.661-1.014-.08-.925.007-1.468a7 7 0 0 1 .107-.535A7 7 0 0 1 3.56 9.3c-.514-.196-.955-.439-1.275-.727-.32-.289-.548-.653-.548-1.081s.229-.792.548-1.08c.32-.29.761-.532 1.275-.728a7 7 0 0 1 .516-.175 7 7 0 0 1-.107-.535c-.087-.542-.097-1.046-.007-1.467.09-.42.291-.8.662-1.014.37-.214.8-.199 1.21-.066.409.132.84.393 1.266.74q.204.165.41.36.206-.195.41-.36c.426-.347.857-.608 1.267-.74.41-.133.839-.148 1.21.065.37.214.571.594.661 1.015s.08.925-.007 1.467m-1.628.97q.305.045.588.104-.09.274-.203.562a15 15 0 0 0-.385-.667m1.317.287c-.132.407-.296.83-.492 1.261.196.43.36.854.492 1.26q.24-.071.453-.153c.463-.177.813-.378 1.04-.583.226-.205.3-.383.3-.524s-.074-.32-.3-.524c-.227-.205-.576-.406-1.04-.583a7 7 0 0 0-.453-.154M9.62 8.71q.096-.168.188-.336.113.287.203.562-.283.06-.588.105zm-.741 1.153c.47-.046.92-.115 1.338-.204q.058.243.093.47c.079.489.079.892.015 1.19-.064.3-.181.452-.304.523-.122.07-.313.096-.604.002-.29-.095-.64-.296-1.024-.609a7 7 0 0 1-.36-.315q.431-.478.846-1.057m-.984.06q-.192.24-.385.457a11 11 0 0 1-.385-.457 15 15 0 0 0 .77 0M5.399 8.709q.097.168.197.33-.305-.045-.588-.104.09-.274.203-.562.092.168.188.336m.741 1.153c-.47-.046-.92-.115-1.338-.204q-.058.244-.093.469c-.079.49-.079.893-.015 1.192s.181.451.304.522c.122.07.313.096.604.002.29-.095.64-.296 1.024-.609q.177-.144.36-.315-.431-.478-.846-1.057M3.826 8.598q.213.082.453.153c.131-.406.296-.83.492-1.26-.196-.43-.36-.854-.492-1.26q-.24.071-.453.153c-.463.177-.812.378-1.04.583-.226.205-.3.382-.3.524 0 .141.074.32.3.524.228.205.577.406 1.04.583'
                clipRule='evenodd'
            />
        </svg>
    )
})
ReactJsEx.displayName = 'ReactJsEx'
export default ReactJsEx
