<template>
  <h1>Forms</h1>
  <SubSection>
    <h2>Custom Form</h2>
    <NetlifyForm>
      <FormInput :required="true" name="name">
        Name
      </FormInput>
      <FormInput name="Email">
        Email
      </FormInput>
      <FormMessage :required="true" name="message">
        Message
      </FormMessage>
    </NetlifyForm>
  </SubSection>
  <SubSection>
    <h2>Basic Pre-configured Form</h2>
    <SimpleContactForm/>
  </SubSection>
</template>