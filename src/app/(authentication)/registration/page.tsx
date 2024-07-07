'use client'

import { Button, Card, Form, FormGroup, Input, Label } from "reactstrap";

export default function Page() {
    return (
        <div style={{ display: 'flex', justifyContent: "center", alignItems: "center", margin: "200px 20px 20px 20px" }}>
            <div style={{ maxWidth: "500px" }}>
                <Card style={{ padding: "30px" }}>
                    <h2 className="mb-3">Create an Account</h2>
                    <p>Lorem ipsum dolor sit amet consectetur. Risus enim scelerisque fermentum fermentum.</p>
                    <FormGroup className="mt-4">
                        <Label for="exampleEmail">
                            Name
                        </Label>
                        <Input
                            id="name"
                            name="name"
                            placeholder="Enter your name"
                            type="text"
                        />
                    </FormGroup>
                    <FormGroup className="mt-2">
                        <Label for="exampleEmail">
                            Email
                        </Label>
                        <Input
                            id="email"
                            name="email"
                            placeholder="Enter your email address"
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
                            placeholder="Enter password"
                            type="password"
                        />
                    </FormGroup>
                    <Button className="mt-2" color="primary">Submit</Button>
                    <small className="mt-3">
                        Already have an account?
                        <strong>
                            Signin
                        </strong>
                    </small>
                </Card>
            </div>
        </div >
    )
}