import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import nock from "nock";
import { API_LINK } from "../../api";
import { PolicyCalculator } from "./PolicyCalculator";

const data = {
  DOB: "2023-01-15",
  gender: "Male",
  sumAssured: 10000,
  modelPremium: 10000,
  premiumFrequency: "Yearly",
  PT: 10,
  PPT: 20,
};

describe("PolicyCalculator component", () => {
  it("render PolicyCalculator component", async () => {
    render(<PolicyCalculator />);
    await waitFor(() => {
      const cards = screen.getByText("Policy Calculator");
      expect(cards).toBeVisible();
    });
  });

  it("check if api is called on check button click with text", async () => {
    nock(API_LINK).post(`/policy-calc`, data).reply(200, "Successfully added!");

    render(<PolicyCalculator />);

    const sumAssured = screen.getByTestId("sumAssured");
    const modelPremium = screen.getByTestId("modelPremium");
    const PT = screen.getByTestId("PT");
    const PPT = screen.getByTestId("PPT");
    const button = screen.getByText("Check");
    const gender = screen.getByTestId("gender");
    const premiumFrequency = screen.getByTestId("premiumFrequency");

    await userEvent.click(gender);
    const genderOption = screen.getAllByRole("option");

    await userEvent.click(premiumFrequency);
    const premiumFrequencyOption = screen.getAllByRole("option");

    userEvent.type(sumAssured, 10000);
    userEvent.type(modelPremium, 10000);
    userEvent.type(PT, 10);
    userEvent.type(PPT, 20);

    await userEvent.click(genderOption[1]);
    await userEvent.click(premiumFrequencyOption[1]);

    await userEvent.click(button);

    await waitFor(() => {
      const msgText = screen.getByTestId("success-msg");
      expect(msgText).toBeVisible();
    });
  });
});
