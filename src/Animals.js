export default function Animals({ animal }) {
  return <div className="animal">
    { animal === 'fish' && '🐟'}
    { animal === 'raccoon' && '🦝'}
    { animal === 'skunk' && '🦨'}
    { animal === 'octopus' && '🐙'}
  </div>;
}