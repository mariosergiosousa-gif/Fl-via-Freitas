interface InstagramEmbedProps {
  url: string;
}

export default function InstagramEmbed({ url }: InstagramEmbedProps) {
  // Ensure the URL ends with /embed/
  const cleanUrl = url.split('?')[0];
  const embedUrl = cleanUrl.endsWith('/') ? `${cleanUrl}embed/` : `${cleanUrl}/embed/`;

  return (
    <div className="flex justify-center w-full aspect-[9/16] h-[75vh] md:h-[85vh]">
      <iframe
        src={embedUrl}
        className="w-full h-full border-0 rounded-lg shadow-2xl"
        allowtransparency="true"
        allow="encrypted-media"
        frameBorder="0"
        scrolling="no"
      ></iframe>
    </div>
  );
}
