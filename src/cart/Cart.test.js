
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

import { mapStateToProps, mapDispatchToProps } from './Cart'

describe('Testing the <Cart/> Component', () => {
          it('it should have the initial state of the application', () => {
                    const initialState = {
                              cart: []
                    };
                    expect(mapStateToProps(initialState)).toEqual(initialState)
          });

          it('should dispatch the appropritate actions and payload on call', () => {
                    const dispatch = jest.fn();

                    mapDispatchToProps(dispatch).addToCart({
                              "id": 1,
                              "name": "To Kill a Mockingbird",
                              "description": "Lawyer Atticus Finch defends the real mockingbird of Harper Lee's classic",
                              "image": "mockingbird.jpg",
                              "price": 19.99
                    })
                    const expectedValue = {
                              payload: {
                                        "id": 1,
                                        "name": "To Kill a Mockingbird",
                                        "description": "Lawyer Atticus Finch defends the real mockingbird of Harper Lee's classic",
                                        "image": "mockingbird.jpg",
                                        "price": 19.99
                              },
                              type: 'ADD'
                    }
                    expect(dispatch.mock.calls[0][0]).toEqual(expectedValue)
          })
})