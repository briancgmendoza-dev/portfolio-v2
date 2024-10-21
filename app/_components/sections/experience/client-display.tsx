import TechStackDisplay from "@/app/_components/sections/experience/tech-stack-display";
import { TClient } from "@/app/_components/sections/experience/types";

export default function ClientDisplay ({ clients }: { clients: TClient[] }) {
  return (
    <>
      {clients.map((client, index) => (
        <div key={index} className="my-4">
          {index === 0 ? null : <p className="my-5">-- & --</p>}
          <h3 className="font-bold">Client: {client.name}</h3>
          {client.site && (
            <span>
              <a href={client.site} target="_blank" className="text-blue-500">{client.site}</a>
            </span>
          )}

          <TechStackDisplay techStack={{
            frontend: client.frontend,
            backend: client.backend,
          }} />

          <p>Notable Contributions:</p>
          <ul className="list-disc pl-5">
            {Array.isArray(client["Notable Contribution"]) && client["Notable Contribution"].map((contribution, index) => (
              <li key={index}>{contribution}</li>
            ))}
          </ul>
        </div>
      ))}
    </>
  )
}
