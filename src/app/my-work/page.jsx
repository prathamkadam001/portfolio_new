import Projects from "../components/projects";
import Solutions from "../components/home/solution";

export const metadata = {
  title: "Pratham Kadam | My Work",
};

export default function Home() {
  return (
    <main>
      <Projects />
      <Solutions />
    </main>
    
  );
}
