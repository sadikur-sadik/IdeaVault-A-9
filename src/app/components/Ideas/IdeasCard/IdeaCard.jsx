'use client'

import Image from "next/image";
import Link from "next/link";

const IdeaCard = ({ idea }) => {

  const {
    _id,
    title,
    shortDescription,
    detailedDescription,
    category,
    tags,
    imageUrl,
    estimatedBudget,
    targetAudience,
    problemStatement,
    proposedSolution,
  } = idea
  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-sm">
        <figure>
          <Image
            src={imageUrl}
            alt="Shoes" height={100} width={100} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {title}
            <div className="badge badge-secondary">{tags}</div>
          </h2>
          <p>{detailedDescription}</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">{category}</div>
            <div className="badge badge-outline">{estimatedBudget}</div>
            <button className="btn btn-success"><Link href={`/ideas/${_id}`}>Details</Link></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IdeaCard;