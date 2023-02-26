import React from "react";
import { Product } from "../components/Product";

 const data = [
    {
      "title": "",
      "price": "$5,332",
      "description": "odio vel est tempor bibendum. Donec felis orci, adipiscing"
    },
    {
      "title": "",
      "price": "$7,475",
      "description": "vitae diam. Proin dolor. Nulla semper tellus id nunc"
    },
    {
      "title": "",
      "price": "$5,113",
      "description": "in faucibus orci luctus et ultrices posuere cubilia Curae Donec tincidunt. Donec vitae erat"
    },
    {
      "title": "",
      "price": "$8,195",
      "description": "fermentum vel, mauris. Integer"
    },
    {
      "title": "",
      "price": "$7,914",
      "description": "nibh enim, gravida sit amet, dapibus id, blandit at, nisi. Cum sociis natoque penatibus et magnis"
    },
    {
      "title": "",
      "price": "$5,460",
      "description": "Quisque libero lacus, varius et, euismod"
    },
    {
      "title": "",
      "price": "$7,266",
      "description": "lorem ut aliquam iaculis, lacus pede sagittis augue, eu tempor erat neque"
    },
    {
      "title": "",
      "price": "$8,143",
      "description": "Quisque fringilla euismod enim. Etiam gravida molestie arcu. Sed eu nibh vulputate mauris sagittis placerat. Cras dictum ultricies ligula."
    },
    {
      "title": "",
      "price": "$8,144",
      "description": "scelerisque, lorem ipsum sodales purus, in molestie tortor nibh sit amet orci. Ut sagittis"
    },
    {
      "title": "",
      "price": "$7,355",
      "description": "natoque penatibus et magnis dis parturient montes,"
    },
    {
      "title": "",
      "price": "$7,442",
      "description": "iaculis quis, pede. Praesent eu dui. Cum sociis natoque penatibus et"
    },
    {
      "title": "",
      "price": "$5,353",
      "description": "adipiscing,"
    },
    {
      "title": "",
      "price": "$6,788",
      "description": "nulla vulputate dui,"
    },
    {
      "title": "",
      "price": "$5,833",
      "description": "Curabitur dictum. Phasellus in felis. Nulla tempor augue ac ipsum. Phasellus vitae mauris sit amet lorem semper"
    },
    {
      "title": "",
      "price": "$9,649",
      "description": "ultrices a, auctor non, feugiat nec, diam."
    },
    {
      "title": "",
      "price": "$6,382",
      "description": "ornare lectus justo eu arcu. Morbi sit amet massa. Quisque porttitor eros nec"
    },
    {
      "title": "",
      "price": "$5,681",
      "description": "sed sem egestas blandit. Nam nulla magna, malesuada vel, convallis in, cursus et, eros. Proin ultrices. Duis volutpat"
    },
    {
      "title": "",
      "price": "$5,580",
      "description": "tellus. Phasellus elit pede, malesuada vel, venenatis"
    },
    {
      "title": "",
      "price": "$9,752",
      "description": "Lorem"
    },
    {
      "title": "",
      "price": "$6,956",
      "description": "risus. Donec egestas. Duis ac arcu. Nunc mauris. Morbi non sapien"
    }   {
      "title": "",
      "price": "$9,752",
      "description": "Lorem"
    },
    {
      "title": "",
      "price": "$6,956",
      "description": "risus. Donec egestas. Duis ac arcu. Nunc mauris. Morbi non sapien"
    }   {
      "title": "",
      "price": "$9,752",
      "description": "Lorem"
    },
    {
      "title": "",
      "price": "$6,956",
      "description": "risus. Donec egestas. Duis ac arcu. Nunc mauris. Morbi non sapien"
    }
  ]



interface Props {
  setTotalQuantity: React.Dispatch<React.SetStateAction<number>>;
  total: number;
}

export const ProductList = (props: Props) => {
  return (
    <div className="row container">
      
{
  data.map((item, index) =><><Product
        name="laptop"
        price={item.price}
        description={item.description}
        setTotal={props.setTotalQuantity}
        total={props.total}
      /></>)
}

    </div>
  );
};
