'use client'

import { Button, Card, Form, FormGroup, Input, Label } from "reactstrap";

export default function Page() {
    return (
        <div style={{ display: 'flex', justifyContent: "center", alignItems: "center", margin: "150px 20px 20px 20px" }}>
            <div style={{ maxWidth: "500px" }}>
                <Card style={{ padding: "30px" }}>
                    <h2 className="mb-3">Login to your account!</h2>
                    <p>Lorem ipsum dolor sit amet consectetur. Risus enim scelerisque fermentum fermentum.</p>
                    <FormGroup className="mt-4">
                        <Label for="exampleEmail">
                            Email Address/Username
                        </Label>
                        <Input
                            id="exampleEmail"
                            name="email"
                            placeholder="with a placeholder"
                            type="email"
                        />
                    </FormGroup>
                    <FormGroup className="mt-2">
                        <Label for="exampleEmail">
                            Password
                        </Label>
                        <Input
                            id="password"
                            name="password"
                            placeholder="with a placeholder"
                            type="password"
                        />
                    </FormGroup>
                    <Button className="mt-2" color="primary">Submit</Button>
                    <small className="mt-3">
                        Forgot password?
                    </small>
                    <small className="mt-1">
                        Don’t have an account?
                        <strong>
                        Signup
                        </strong>
                    </small>
                </Card>
            </div>
        </div >
    )
}