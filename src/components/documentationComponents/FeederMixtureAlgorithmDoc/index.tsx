export const FeederMixtureAlgorithmDoc: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">
        Feed Mixture Optimization Algorithm
      </h1>

      <section className="mb-4">
        <a
          className="text-2xl font-semibold mb-2 text-blue-500"
          href="https://drive.google.com/drive/folders/1Bzj9Kgjjt8x2Uw1wYuesTJZrGNm3SIlV"
          target="_blank"
        >
          DEMO
        </a>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Introduction</h2>
        <p>
          The Feed Mixture Optimization Algorithm is designed to generate and
          iteratively improve feed mixtures for various types of poultry. This
          algorithm takes into account the specific nutritional needs of
          different poultry based on their type and age, while also adhering to
          dietary restrictions.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Problem Statement</h2>
        <p>
          Poultry requires specific proportions of components (such as protein,
          calcium, and energy) that vary based on their age and purpose (laying,
          meat production, etc.). The goal is to create a feed mixture from
          available nutrients (corn, barley, soy, etc.) that meets these
          nutritional needs while respecting some restrictions.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">
          Team Collaboration and Integration
        </h2>
        <p>
          The project was developed in collaboration with{" "}
          <a href="" className="text-blue-500" target="_blank">
            Mohammad Ali
          </a>
          , a specialist in agricultural engineering. Mohammad played a crucial
          role in building the website and clarifying requirements. My
          contributions included identifying possible solutions, comparing them,
          selecting the optimal solution, implementing and testing it. This
          partnership ensured the effective integration of the algorithm into a
          front-end application, delivering a user-friendly interface for
          end-users
        </p>
        <p>
          Tackled a challenging short-term volunteer project to develop an
          algorithm for calculating feeder percentages to create a chicken
          mixture. Delved deeply into an unfamiliar field to understand unclear
          requirements, even beyond the client's expertise. Utilized a
          combination of advanced concepts such as linear algebra, first-order
          logic, loss functions, and optimization loops. Implemented rigorous
          unit and integration testing. Delivered an impressive algorithm that
          successfully passed client acceptance testing, demonstrating the
          solution's effectiveness.
        </p>
        <p>
          <strong>
            The project is private, with future aspirations to add features such
            as diagnosing poultry diseases.
          </strong>
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">
          Suggested Solutions Comparison
        </h2>

        <h3 className="text-xl font-semibold mb-2">
          1. Intelligent Search Algorithm
        </h3>
        <p>
          <strong>Pros:</strong> Can find optimal solutions through advanced
          search techniques and heuristics.
          <br />
          <strong>Cons:</strong> High computational cost and complexity, making
          it less practical for real-time applications.
        </p>

        <h3 className="text-xl font-semibold mt-4 mb-2">
          2. Linear Equations Approach
        </h3>
        <p>
          <strong>Description:</strong> The problem can be interpreted as
          solving a system of linear equations with multiple unknowns. The
          number of equations equals the number of nutrients in the mixture, and
          the number of unknowns corresponds to the quantities of each chemical
          in the nutrients.
          <br />
          <strong>Pros:</strong> Provides a precise mathematical framework for
          directly solving the optimal mixture.
          <br />
          <strong>Cons:</strong> May be too rigid for practical use, as
          real-world problems often require flexibility in dealing with
          constraints and non-linearities.
        </p>

        <h3 className="text-xl font-semibold mt-4 mb-2">
          3. Rule-Based Methodology
        </h3>
        <p>
          <strong>Description:</strong> Mimics expert decision-making processes
          programmatically by replicating the rules and heuristics used by
          domain experts.
          <br />
          <strong>Pros:</strong> Easy to understand and implement,
          straightforward approach that can be effective in well-defined
          scenarios.
          <br />
          <strong>Cons:</strong> Limited by the predefined rules, may not adapt
          well to unforeseen situations or complex interactions between
          components.
        </p>

        <h3 className="text-xl font-semibold mt-4 mb-2">
          4. Pearson Square Method with Iterative Improvement (Implemented
          Solution)
        </h3>
        <p>
          <strong>Description:</strong> Starts with a base mixture using the
          Pearson square method and then iteratively improves the mixture using
          a loss function until the goal is reached.
          <br />
          <strong>Pros:</strong> Combines a straightforward initial
          approximation with iterative refinement, balancing simplicity and
          effectiveness. Uses a loss function to guide improvements towards the
          optimal solution.
          <br />
          <strong>Cons:</strong> May require fine-tuning of the loss function
          and iterative process to ensure convergence to the best solution.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Methodology</h2>
        <h3 className="text-xl font-semibold mb-2">
          1. Initial Mixture Generation
        </h3>
        <p>
          The algorithm begins by generating an initial feed mixture. It selects
          the best feeder for each required material based on the highest
          percentage of that material present in the feeder. If a feeder is
          restricted, the algorithm uses the next best feeder.
        </p>

        <h3 className="text-xl font-semibold mt-4 mb-2">
          2. Iterative Improvement
        </h3>
        <p>
          The algorithm enters a loop to refine the mixture. For each iteration:
        </p>
        <ul className="list-disc list-inside ml-4">
          <li>
            It identifies the first unmatched material (i.e., a material whose
            percentage in the mixture does not meet the animal's needs).
          </li>
          <li>
            Based on whether the material needs to be increased or decreased, it
            identifies the best N replacement pairs of feeders using a loss
            function. A cartesian product is implemented to find all valid pairs
            of feeders.
          </li>
          <li>
            For each replacement pair, it calculates the amount to replace and
            checks if this change respects all feeder restrictions.
          </li>
          <li>
            The loop continues until all materials in the mixture match the
            animal's needs.
          </li>
        </ul>

        <h3 className="text-xl font-semibold mt-4 mb-2">
          3. Replacement Strategy
        </h3>
        <p>
          First, the algorithm finds all possible pairs (replace-replace with)
          by performing a Cartesian product between the set of unused nutrients
          and the set of nutrients used in the current mix. Second, the
          algorithm uses a loss function to evaluate the pairs. This function
          gives a small loss to the pair whose components are closely matched,
          except for the target component that should be increased or decreased,
          here the loss is small with large differences.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Conclusion</h2>
        <p>
          The Feed Mixture Optimization Algorithm effectively generates and
          refines feed mixtures to meet the specific nutritional requirements of
          different poultry types. By leveraging a systematic approach to
          initial mixture generation and iterative improvement, the algorithm
          ensures optimal feed compositions that comply with dietary
          restrictions. The implemented solution balances simplicity and
          effectiveness, using the Pearson square method and iterative
          refinement guided by a loss function. This approach provides a
          practical and adaptable solution for real-world applications in
          poultry feed formulation.
        </p>
      </section>
    </div>
  );
};
