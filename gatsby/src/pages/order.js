import { graphql } from 'gatsby';
import React from 'react';
import Img from 'gatsby-image';
import SEO from '../components/SEO';
import useForm from '../utils/useForm';
import calculatePizzaPrice from '../utils/calculatePizzaPrice';
import formatMoney from '../utils/formatMoney';

export default function OrderPage({ data }) {
  const { values, updateValue } = useForm({
    name: '',
    email: '',
  });
  return (
    <>
      <SEO title="Order pizza" />
      <form>
        <fieldset>
          <legend>Your info</legend>
          <label htmlFor="name">
            Name
            <input
              type="text"
              name="name"
              value={values.name}
              id="name"
              onChange={(e) => updateValue(e)}
            />
          </label>

          <label htmlFor="email">
            Email
            <input
              id="email"
              type="email"
              name="email"
              value={values.email}
              onChange={(e) => updateValue(e)}
            />
          </label>
        </fieldset>
        <fieldset>
          <legend>Menu</legend>
          {data.pizzas.nodes.map((pizza) => (
            <div key={pizza.id}>
              <div>
                <h2>{pizza.name}</h2>
              </div>
              <div>
                {['S', 'M', 'L'].map((size) => (
                  <button type="button" key={size}>
                    {size} {formatMoney(calculatePizzaPrice(pizza.price, size))}
                  </button>
                ))}
              </div>
              <Img width="50" height="50" fluid={pizza.image.asset.fluid} />
            </div>
          ))}
        </fieldset>
        <fieldset>
          <legend>Order</legend>
        </fieldset>
      </form>
    </>
  );
}

export const query = graphql`
  query {
    pizzas: allSanityPizza {
      nodes {
        name
        id
        slug {
          current
        }
        price
        image {
          asset {
            fluid(maxWidth: 100) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`;
