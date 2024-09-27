import { useState } from 'react';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';

interface Plant {
  name: string;
  scientificName: string;
  description: string;
}

interface PlantCardProps {
  selectedPlant: Plant;
}

const PlantCard: React.FC<PlantCardProps> = ({ selectedPlant }) => {
  const [view, setView] = useState<string>('info'); // Default view

  const handleViewChange = (value: string) => {
    setView(value);
  };

  return (
    <>
      <Select onValueChange={handleViewChange}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Select view" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="info">Plant Information</SelectItem>
          <SelectItem value="uses">Medicinal Uses</SelectItem>
          <SelectItem value="cultivation">Cultivation Tips</SelectItem>
        </SelectContent>
      </Select>

      <Card>
        <CardHeader>
          <CardTitle>{selectedPlant.name}</CardTitle>
          <CardDescription>{selectedPlant.scientificName}</CardDescription>
        </CardHeader>
        <CardContent>
          {view === 'info' && (
            <div>
              <p>{selectedPlant.description}</p>
              <ScrollArea className="h-[400px] w-full md:w-[400px] rounded-md border p-4 overflow-auto">
                <h2 className="text-md font-semibold mt-4">Taxonomy</h2>
                <ul className="list-disc pl-5">
                  <li><strong>Kingdom:</strong> Plantae</li>
                  <li><strong>Clade:</strong> Angiosperms</li>
                  <li><strong>Clade:</strong> Eudicots</li>
                  <li><strong>Clade:</strong> Asterids</li>
                  <li><strong>Order:</strong> Lamiales</li>
                  <li><strong>Family:</strong> Lamiaceae</li>
                  <li><strong>Genus:</strong> Ocimum</li>
                  <li><strong>Species:</strong> O. tenuiflorum</li>
                </ul>
              </ScrollArea>
            </div>
          )}

          {view === 'uses' && (
            <ScrollArea className="h-[400px] w-full md:w-[400px] rounded-md border p-4 overflow-auto">
              <h2 className="text-md font-semibold mt-4">Remedies and Medicinal Uses</h2>
              <p className="mb-2">Tulsi is celebrated for its versatile medicinal properties:</p>
              <ul className="list-disc pl-5">
                <li><strong>Adaptogen:</strong> Helps the body adapt to stress and normalize physiological processes.</li>
                <li><strong>Anti-Anxiety:</strong> Reduces stress and anxiety levels, promoting a sense of well-being.</li>
                <li><strong>Anti-Inflammatory:</strong> Alleviates inflammation-related conditions like arthritis and respiratory issues.</li>
                <li><strong>Antimicrobial:</strong> Exhibits antibacterial, antiviral, and antifungal properties, making it useful for infections.</li>
                <li><strong>Immunomodulatory:</strong> Boosts the immune system, enhancing the body&apos;s ability to fight infections.</li>
                <li><strong>Digestive Health:</strong> Improves digestion, alleviates bloating, and relieves gas and indigestion.</li>
                <li><strong>Respiratory Health:</strong> Eases symptoms of respiratory conditions such as coughs, colds, and asthma.</li>
                <li><strong>Skin Health:</strong> Used in treating acne, eczema, and other skin conditions due to its antimicrobial and anti-inflammatory properties.</li>
              </ul>
            </ScrollArea>
          )}

          {view === 'cultivation' && (
            <ScrollArea className="h-[400px] w-full md:w-[550px] rounded-md border p-4 overflow-auto">
              <h2 className="text-md font-semibold mt-4">Cultivation Tips</h2>
              <p>Cultivation tips content goes here...</p>
  
  <h3 className="text-lg font-semibold mt-4">Soil Type</h3>
  <p>Prefers well-drained, loamy or sandy soil rich in organic matter.</p>

  <h3 className="text-lg font-semibold mt-4">pH Level</h3>
  <p>Ideal soil pH is between 6.5 and 7.5.</p>

  <h3 className="text-lg font-semibold mt-4">Climate</h3>
  <p>Thrives in warm, tropical climates with temperatures ranging from 20°C to 30°C. It is sensitive to frost.</p>

  <h3 className="text-lg font-semibold mt-4">Planting</h3>
  <p>Can be grown from seeds or cuttings. Sow seeds about 0.5 cm deep and space plants 20-30 cm apart. Seedlings can be transplanted when they are 3-4 weeks old.</p>

  <h3 className="text-lg font-semibold mt-4">Watering</h3>
  <p>Regular watering is needed, but avoid overwatering. Keep the soil moist but well-drained.</p>

  <h3 className="text-lg font-semibold mt-4">Harvesting</h3>
  <p>Harvest leaves once the plant is 6-8 inches tall. For medicinal use, harvest before the plant flowers to ensure maximum potency.</p>


            </ScrollArea>
          )}
        </CardContent>
        <CardFooter>
          {/* Add any footer actions if needed */}
        </CardFooter>
      </Card>
    </>
  );
};

export default PlantCard;
