import { GifItem } from "../../src/components/GifItem";
const { render, screen } = require("@testing-library/react");


describe('Pruebas en <GifItem/>', () => { 

    const title = 'Dragon Ball';
    const url= 'https://gifexpertapp.com/dragon-ball.gif';

    test('debe de hacer match con el snapshot', () => { 

        const { container } =  render( <GifItem title={ title } url={ url } />);

        expect( container ).toMatchSnapshot();
     });

     test('debe de mostrar la imagen con el URL y el ALT indicado', () => { 
        render( <GifItem title={ title } url={ url } />);
        
        //expect ( screen.getByRole('img').src).toBe( url );
        const { src, alt } = screen.getByRole('img');
        expect( src ).toBe( url );
        expect( alt ).toBe( title );

      });

      test('debe de mostrar el titulo en el componente', () => { 

        render(<GifItem title={ title } url={ url } />);
        expect( screen.getByText( title )).toBeTruthy();
       });

 });