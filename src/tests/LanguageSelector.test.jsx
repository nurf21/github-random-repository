import { expect, test, vi } from "vitest";
import { render } from "vitest-browser-react";
import LanguageSelector from "../components/LanguageSelector";

const mockLanguages = [
  { title: "JavaScript", value: "JavaScript" },
  { title: "Python", value: "Python" },
];

test("renders all language options correctly", () => {
  const { getByLabelText, getByRole } = render(
    <LanguageSelector
      languages={mockLanguages}
      selected=""
      onChange={() => {}}
    />
  );

  const select = getByLabelText("Language Selector");
  const options = getByRole("option").all();

  expect(select).toBeInTheDocument();
  expect(options.length).toBe(3);
  expect(options[1].element().value).toBe("JavaScript");
  expect(options[2].element().value).toBe("Python");
});

test("calls onChange when selecting a language", async () => {
  const handleChange = vi.fn();
  const { getByLabelText } = render(
    <LanguageSelector
      languages={mockLanguages}
      selected=""
      onChange={handleChange}
    />
  );

  const select = getByLabelText("Language Selector");

  await select.selectOptions("JavaScript");
  expect(handleChange).toHaveBeenCalledTimes(1);
  await select.selectOptions("Python");
  expect(handleChange).toHaveBeenCalledTimes(2);
});
