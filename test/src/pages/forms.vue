<template>
  <SubSection>
    <h1>Forms</h1>
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
</template>