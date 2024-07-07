'use client'

import { Button, Card, Form, FormGroup, Input, Label } from "reactstrap";

export default function Page() {
    return (
        <div style={{ display: 'flex', justifyContent: "center", alignItems: "center", margin: "150px 20px 20px 20px" }}>
            <div style={{ maxWidth: "500px" }}>
                <Card style={{ padding: "30px" }}>
                    <h2 className="mb-3">Forgot your password?!</h2>
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
                    <Button className="mt-2" color="primary">Reset passwod</Button>
                </Card>
            </div>
        </div >
    )
}