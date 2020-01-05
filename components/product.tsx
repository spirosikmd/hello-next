import Link from 'next/link';

export const Product: React.FC<{
  product: {
    id: string;
    name: string;
    slug: string;
    price: string;
    image: {
      sourceUrl: string;
    };
  };
}> = ({ product: { name, slug, price, image } }) => (
  <div className="product">
    {image && <img src={image.sourceUrl} />}
    <Link href="/p/[slug]" as={`/p/${slug}`}>
      <a>{name}</a>
    </Link>
    <div>{price}</div>
    <style jsx>{`
      .product {
        font-family: 'Arial';
        display: flex;
        flex-direction: column;
        border: 1px solid #ddd;
        padding: 10px;
      }

      .product:not(:last-child) {
        margin-right: 10px;
      }

      img {
        height: 200px;
        width: 200px;
      }

      a {
        text-decoration: none;
        color: blue;
        font-family: 'Arial';
      }

      a:hover {
        opacity: 0.6;
      }
    `}</style>
  </div>
);
