import FeaturedCard from "./FeaturedCard/FeaturedCard";

const FeaturedSection = () => {
  const data = [
    {
      "id": "item_01",
      "category": "Technology",
      "title": "Minimalist Workspace",
      "imageUrl": "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4",
      "description": "A clean, focused frontend developer setup with an open laptop, soft natural lighting, and a touch of indoor greenery.",
      "tags": "workspace"
    },
    {
      "id": "item_02",
      "category": "Nature",
      "title": "Alpine Reflection",
      "imageUrl": "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05",
      "description": "Crisp mountain air meeting a perfectly still, crystal-clear lake that mirrors the dramatic peaks above.",
      "tags": "mountains"
    },
    {
      "id": "item_03",
      "category": "Urban",
      "title": "Neon Light Trails",
      "imageUrl": "https://images.unsplash.com/photo-1509198397868-475647b2a1e5",
      "description": "Vibrant long-exposure night photography capturing the energy and movement of city traffic through neon streaks.",
      "tags": "city"
    }
  ]
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 mb-8">
      {data.map(d => <FeaturedCard data={d} key={d.id}/>)}
    </div>
  );
};

export default FeaturedSection;