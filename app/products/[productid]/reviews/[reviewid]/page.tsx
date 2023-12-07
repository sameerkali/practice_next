import React from "react";

const page = ({ params }: { params: { productid: String, reviewid: String } }) => {
  return (
    <div>
      product: {params.productid}
      review : {params.reviewid}
    </div>
  );
};

export default page;
